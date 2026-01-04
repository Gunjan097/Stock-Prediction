from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True,min_length=8, style={'input_type' : 'password'})
    class Meta:
        model = User
        fields = ['id', 'username', 'email','password']

    def create(self, validated_data):
        #create = save password in plain text
        #create_user = automatically hash the password
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )

        # user=User.objects.create(**validated_data)
        return user