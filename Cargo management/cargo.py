# cargo/models.py
from django.db import models
from flights.models import Flight

class CargoItem(models.Model):
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE)
    tracking_number = models.CharField(max_length=20)
    description = models.TextField()
    weight = models.DecimalField(max_digits=10, decimal_places=2)
    origin = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    status = models.CharField(max_length=20, choices=[
        ('pending', 'Pending'),
        ('in_transit', 'In Transit'),
        ('delivered', 'Delivered'),
    ], default='pending')
    # ... other cargo-related fields

# cargo/views.py
from rest_framework import viewsets
from .models import CargoItem
from .serializers import CargoItemSerializer

class CargoItemViewSet(viewsets.ModelViewSet):
    queryset = CargoItem.objects.all()
    serializer_class = CargoItemSerializer