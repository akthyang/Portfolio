from django.contrib import admin

# Register your models here.
from .models import Tag, CodingProject, ProjectImage

# allows us to edit multiple models at the same time
# and displays class in ProjectAdmin
class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    # default asks to upload 1 image
    extra = 1

class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title","link")
    inlines = [ProjectImageInline]
    search_fields = ("title","description")
    list_filter = ("tags",)

class TagsAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)

admin.site.register(Tag, TagsAdmin)
admin.site.register(CodingProject, ProjectAdmin)
admin.site.register(ProjectImage)