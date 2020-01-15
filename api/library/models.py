from django.db import models

class Section(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(null = True)
    html_content = models.TextField( null = True)
    imageName = models.CharField(max_length = 100, null = True)

class Program(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(null = True)
    section_list = models.ManyToManyField(Section)
