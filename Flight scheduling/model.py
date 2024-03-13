# schedules/models.py
from django.db import models
from flights.models import Flight

class FlightSchedule(models.Model):
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE)
    scheduled_departure = models.DateTimeField()
    scheduled_arrival = models.DateTimeField()
    gate = models.CharField(max_length=10, null=True, blank=True)
    status = models.CharField(max_length=20, choices=[
        ('scheduled', 'Scheduled'),
        ('delayed', 'Delayed'),
        ('cancelled', 'Cancelled'),
        ('arrived', 'Arrived'),
        ('departed', 'Departed'),
    ], default='scheduled')
    # ... other schedule-related fields

# schedules/views.py
from rest_framework import viewsets
from .models import FlightSchedule
from .serializers import FlightScheduleSerializer

class FlightScheduleViewSet(viewsets.ModelViewSet):
    queryset = FlightSchedule.objects.all()
    serializer_class = FlightScheduleSerializer