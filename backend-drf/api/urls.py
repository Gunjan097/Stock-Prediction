from django.urls import path
from accounts import views as UserViews
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [   
     # Define your API endpoints here
     path("register/", UserViews.RegisterUserView.as_view(), name="register"),
     path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
     path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
     path('protected/', UserViews.ProtectedView.as_view(), name='protected'),
]
