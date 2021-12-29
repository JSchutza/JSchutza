"""updateskills

Revision ID: 75050635a28a
Revises: bf77d85c473e
Create Date: 2021-12-29 09:11:04.137193

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '75050635a28a'
down_revision = 'bf77d85c473e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('skills', sa.Column('img', sa.Text(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('skills', 'img')
    # ### end Alembic commands ###