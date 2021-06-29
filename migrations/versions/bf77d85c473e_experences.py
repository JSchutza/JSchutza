"""experences

Revision ID: bf77d85c473e
Revises: c4f400e7a040
Create Date: 2021-06-29 10:58:56.478331

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bf77d85c473e'
down_revision = 'c4f400e7a040'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('experiences', 'bulletpoint_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('experiences', 'bulletpoint_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###
