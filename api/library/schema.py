import graphene
from graphene_django.types import DjangoObjectType, ObjectType
from library.models import Program, Section


# make the graphl schema directly from the database model
class SectionType(DjangoObjectType):
    class Meta:
        model = Section

class ProgramType(DjangoObjectType):
    class Meta:
        model = Program


# Create a Query type : this is the resolver that connects the the querries in schema to actual actions of database
class Query(ObjectType):
    section = graphene.Field(SectionType, id=graphene.Int())
    program = graphene.Field(ProgramType, id=graphene.Int())
    sections = graphene.List(SectionType)
    programs = graphene.List(ProgramType)

    def resolve_section(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return section.objects.get(pk=id)

        return None

    def resolve_program(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return program.objects.get(pk=id)

        return None

    def resolve_sections(self, info, **kwargs):
        return Section.objects.all()

    def resolve_programs(self, info, **kwargs):
        return Program.objects.all()


schema = graphene.Schema(query=Query)
