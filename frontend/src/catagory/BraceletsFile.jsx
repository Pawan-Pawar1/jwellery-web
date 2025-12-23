import React from "react";
export default function BraceletsFile(){
    return(
        <>
         <form encType="multipart/form-data">
  <div class="mb-3">
    <label for="productName" class="form-label">name of the prduct</label>
    <input type="text" name="productName" class="form-control" id="productName" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="price" class="form-label">price of the prduct</label>
    <input type="number" name="price" class="form-control" id="price" />
    
  </div>
  <div class="mb-3">
    <label for="weight" class="form-label">weight of the prduct</label>
    <input type="email" name="weight" class="form-control" id="weight" />
    
  </div>
 <div class="mb-3">
    <label for="material" class="form-label">material of the prduct</label>
    <input type="text" name="material" class="form-control" id="material" />
    
  </div>
  <div class="mb-3">
    <label for="images" class="form-label">upload the product image</label>
    <input type="file" name="image" class="form-control" id="images" />
    
  </div>
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </>
    )
}