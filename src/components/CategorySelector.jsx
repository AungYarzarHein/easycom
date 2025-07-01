import React from 'react'

const CategorySelector = ({onChangeCategory}) => {
  return (
   <div className="categoryWrapper">
          <div className="categoryGroup">
              <button className="categoryBtn" onClick={() => onChangeCategory("")}  > All </button>
              <button className="categoryBtn" onClick={() => onChangeCategory("smartphones")}  > smartphones </button>
              <button className="categoryBtn" onClick={() => onChangeCategory("beauty")}  > beauty </button>
              <button className="categoryBtn" onClick={() => onChangeCategory("mens-shoes")}  > mens-shoes </button>
              <button className="categoryBtn" onClick={() => onChangeCategory("kitchen-accessories")}  > kitchen-accessories </button>
              <button className="categoryBtn" onClick={() => onChangeCategory("laptops")}  > laptops </button>
              <button className="categoryBtn" onClick={() => onChangeCategory("mens-shirts")}  > mens-shirts </button>
              <button className="categoryBtn" onClick={() => onChangeCategory("groceries")}  > groceries </button>
          </div>
   </div>
  )
}

export default CategorySelector