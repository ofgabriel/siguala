# Generated by Django 3.2.1 on 2021-05-30 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('formulario', '0003_formulario_nome_form'),
    ]

    operations = [
        migrations.AddField(
            model_name='formulario',
            name='nome_teste',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
