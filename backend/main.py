from fastapi import FastAPI , Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
from db import engin , SessionLocal
import models

models.Base.metadata.create_all(bind=engin)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173'] ,
    allow_credentials=True ,
    allow_methods=['*'] ,
    allow_headers=['*'] ,
)

def get_db(): 
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class CategoryCreate(BaseModel) :
    categoryName : str

# ===================== Add Category type ================
@app.post("/api/add-category")
def addCategory(category: CategoryCreate , db : Session = Depends(get_db)):
    new_category = models.Category(type = category.categoryName)

    db.add(new_category)
    db.commit()
    db.refresh(new_category)

# =================== Remove category type ==================
@app.delete("/api/remove-category")