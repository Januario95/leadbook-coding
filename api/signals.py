from django.dispatch import receiver
from django.db.models.signals import (
    pre_save, post_save
)
from django.contrib.auth.models import User as DjangoUser

from .models import User


@receiver(post_save, sender=User)
def user_post_save(sender, instance,
                   created,
                   *args, **kwargs):
    if created:
        user = DjangoUser.objects.filter(
            username=instance.username.lower()
        )
        if not user.exists():
            user = DjangoUser.objects.create(
                username=instance.username.lower()
            )
            user.set_password(instance.password)
            user.save()
            print(f'create <> {user}')
