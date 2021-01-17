from django.urls import path
from .views import CustomUserCreate, BlacklistTokenUpdateView,CustomUserListView
from rest_framework_jwt.views import obtain_jwt_token



app_name = 'user'

urlpatterns = [
    path('create/', CustomUserCreate.as_view(), name="create_user"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist'),
    path('api-token-auth/', obtain_jwt_token),
    path('userlist/', CustomUserListView.as_view(), name='list_users'),
]
