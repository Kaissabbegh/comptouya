from rest_framework import serializers
from .models import Client, Review, Account, AccountImage
from django.contrib.auth.hashers import make_password

class ClientSerializer(serializers.ModelSerializer):
    accounts_sold = serializers.IntegerField(read_only=True)
    accounts_bought = serializers.IntegerField(read_only=True)
    
    class Meta:
        model = Client
        fields = ['id', 'username', 'email', 'phone_number', 'icon', 'vpn_country', 
                 'wallet_balance', 'accounts_sold', 'accounts_bought']
        extra_kwargs = {
            'password': {'write_only': True},
            'email': {'required': True}
        }
    
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        return super().create(validated_data)

class ReviewSerializer(serializers.ModelSerializer):
    reviewer_username = serializers.CharField(source='reviewer.username', read_only=True)
    
    class Meta:
        model = Review
        fields = ['id', 'reviewer', 'reviewer_username', 'reviewed_client', 'rating', 'comment', 'created_at']
        read_only_fields = ['reviewer', 'created_at']

class AccountImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccountImage
        fields = ['id', 'image', 'uploaded_at']

class AccountSerializer(serializers.ModelSerializer):
    screenshots = AccountImageSerializer(many=True, read_only=True)
    seller_username = serializers.CharField(source='seller.username', read_only=True)
    buyer_username = serializers.CharField(source='buyer.username', read_only=True, allow_null=True)
    
    class Meta:
        model = Account
        fields = '__all__'
        read_only_fields = ['seller', 'price_after_tax', 'created_at', 'updated_at', 'sold', 'sold_at']
    
    def validate(self, data):
        # Add any validation logic here
        if data.get('price') and data['price'] <= 0:
            raise serializers.ValidationError("Price must be greater than zero.")
        return data