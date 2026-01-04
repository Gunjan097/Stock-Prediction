from django.urls import path
from accounts import views as UserViews

urlpatterns = [   
     # Define your API endpoints here
     path("register/", UserViews.RegisterUserView.as_view(), name="register"),
     
]
