from rest_framework import viewsets, permissions, status,filters
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth import get_user_model
from django_filters.rest_framework import DjangoFilterBackend
from .models import Review, Account, AccountImage
from .serializers import ClientSerializer, ReviewSerializer, AccountSerializer, AccountImageSerializer
from django.shortcuts import get_object_or_404
from decimal import Decimal
from rest_framework.pagination import PageNumberPagination

Client = get_user_model()

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    @action(detail=True, methods=['get'])
    def reviews(self, request, pk=None):
        client = self.get_object()
        reviews = client.reviews_received.all()
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['get'])
    def listings(self, request, pk=None):
        client = self.get_object()
        accounts = client.accounts_selling.filter(sold=False)
        serializer = AccountSerializer(accounts, many=True)
        return Response(serializer.data)

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def perform_create(self, serializer):
        serializer.save(reviewer=self.request.user)

class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['game', 'lol_solo_rank', 'valorant_rank']
    search_fields = ['description', 'lol_server', 'valorant_server']
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def perform_create(self, serializer):
        serializer.save(seller=self.request.user)
    
    @action(detail=True, methods=['post'])
    def buy(self, request, pk=None):
        account = self.get_object()
        buyer = request.user
        
        if account.seller == buyer:
            return Response({'error': 'You cannot buy your own account'}, 
                          status=status.HTTP_400_BAD_REQUEST)
        
        if account.sold:
            return Response({'error': 'This account has already been sold'}, 
                          status=status.HTTP_400_BAD_REQUEST)
        
        # Check buyer's wallet balance
        if buyer.wallet_balance < account.price_after_tax:
            return Response({'error': 'Insufficient funds'}, 
                          status=status.HTTP_400_BAD_REQUEST)
        
        # Process transaction
        buyer.wallet_balance -= account.price_after_tax
        account.seller.wallet_balance += account.price  # Seller gets price before tax
        account.buyer = buyer
        account.sold = True
        account.sold_at = timezone.now()
        
        buyer.save()
        account.seller.save()
        account.save()
        
        return Response({'success': 'Account purchased successfully'}, 
                      status=status.HTTP_200_OK)
    
    @action(detail=True, methods=['post'])
    def upload_screenshot(self, request, pk=None):
        account = self.get_object()
        if account.seller != request.user:
            return Response({'error': 'You are not the owner of this account'}, 
                          status=status.HTTP_403_FORBIDDEN)
        
        image = request.FILES.get('image')
        if not image:
            return Response({'error': 'No image provided'}, 
                          status=status.HTTP_400_BAD_REQUEST)
        
        AccountImage.objects.create(account=account, image=image)
        return Response({'success': 'Screenshot uploaded successfully'}, 
                      status=status.HTTP_201_CREATED)

class AccountImageViewSet(viewsets.ModelViewSet):
    queryset = AccountImage.objects.all()
    serializer_class = AccountImageSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]