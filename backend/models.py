from sqlalchemy import Column , Integer , String , ForeignKey
from sqlalchemy.orm import relationship
from db import Base

#===================== Design table =================
class Design(Base) : 
    __tablename__ = 'design'

    id = Column(Integer , primary_key=True , index=True)
    c_id = Column(Integer , ForeignKey('category.id'))
    b_id = Column(Integer , ForeignKey('banner.id'))
    name = Column(String(200))
    price = Column(Integer)
    image = Column(String(500))

    fk_category = relationship('Category' , back_populates='fk_design')
    fk_banner = relationship('Banner' , back_populates='fk_design')

#================= Category table ==================
class Category(Base) : 
    __tablename__ = 'category'

    id = Column(Integer , primary_key=True , index=True)
    type = Column(String(100)) 

    fk_design = relationship('Design' , back_populates='fk_category')

#================== Banner table ================
class Banner(Base) : 
    __tablename__ = 'banner'

    id = Column(Integer , primary_key=True , index=True)
    banner_name = Column(String(150))

    fk_design = relationship('Design' , back_populates='fk_banner')


#================ Arrival table ===================
class Arrival(Base) : 
    __tablename__ = 'arrival'

    id = Column(Integer , primary_key=True , index=True)
    image = Column(String(500))