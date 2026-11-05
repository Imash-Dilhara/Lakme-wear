from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

SQL_DB_URL = "mysql+pymysql://root:@localhost:3306/lakmewaer"

engin = create_engine(SQL_DB_URL)
SessionLocal = sessionmaker(autocommit=False , autoflush=False , bind=engin)
Base = declarative_base()