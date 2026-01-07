from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

# Create your views here.

class RegisterUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]  # Allow any user (authenticated or not) to access this view
    
class ProtectedView(APIView):
    # only allow access to authenticated users
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"message": "This is a protected view accessible only to authenticated users."})
