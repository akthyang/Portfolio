from django.db import models

# Create your models here.

# class of tags attached to each coding projecy
class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True)
    def __str__(self):
        return self.name


class CodingProject(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    tags = models.ManyToManyField(Tag, related_name="projects")
    link = models.URLField(max_length=200, blank=True)

    def __str__(self):
        return self.title

# stores the images for each project    
class ProjectImage(models.Model):
    # ensures each image is associated with only 1 project
    project = models.ForeignKey(
        # and deletes all images associated w/ project if project deleted
        CodingProject, related_name="images", on_delete=models.CASCADE
    )
    image = models.ImageField(upload_to="project_images/")

    def __str__(self) -> str:
        return f"{self.project.title} Image"

