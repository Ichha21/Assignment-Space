from django.urls import path
from .views import student_signup, teacher_signup, admin_signup

urlpatterns = [
    path('student/signup/', student_signup),
    path('teacher/signup/', teacher_signup),
    path('admin/signup/', admin_signup),
]
