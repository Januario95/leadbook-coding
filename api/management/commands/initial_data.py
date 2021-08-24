from django.core.management.base import BaseCommand

from ...models import User, Company


class Command(BaseCommand):
    help = 'Initial data to the Database'

    def handle(self, *args, **options):

        for _ in range(5):
            if _ == 0:
                User.objects.create(
                    username='reinata',
                    email='reinataxxx@gmail.com',
                    password='Nata1993'
                )
            elif _ == 1:
                User.objects.create(
                    username='angelina',
                    email='angelinaxxx@gmail.com',
                    password='Angela005'
                )
            elif _ == 2:
                Company.objects.create(
                    name='Google',
                    email='press@google.com',
                    address='Mountain View, California, United States',
                    employee_size=139995,
                    phone_number='1-650-253-0000',
                    website='https://www.google.com/',
                    is_favorite=False
                )
            elif _ == 3:
                Company.objects.create(
                    name='Facebook, Inc.',
                    email='',
                    address='Menlo Park, California, United States',
                    employee_size=60654,
                    phone_number='650-308-7300',
                    website='https://www.facebook.com/',
                    is_favorite=False
                )
            else:
                Company.objects.create(
                    name='Apple Inc',
                    email='',
                    address='Cupertino, California, United States',
                    employee_size=147000,
                    phone_number='1800-80-6419',
                    website='https://www.apple.com/',
                    is_favorite=False
                )

        print('Completed! Check your database.')
