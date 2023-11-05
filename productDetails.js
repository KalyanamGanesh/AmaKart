
var productDetail=JSON.parse(localStorage.getItem('productDetail'));
document.body.innerHTML=`
<div id="product">
        <div class="left-column">
            <img id="productImg" src="${productDetail.thumbnail}" >
        </div>
        <div class="right-column">
            <div class="product-description">
                <h1 id="title">${productDetail.title}</h1>
                <h4 id="brand">${productDetail.brand}</h4>
                <h3>
                    Price: Rs 
                    <span id="price">${productDetail.price}</span>
                </h3>
                <div class="description">
                    <h3>Description</h3>
                    <p id="description">${productDetail.description}</p>
                </div>
                <div class="product-preview">
                    <h3>Product Preview</h3>
                    <div class="previewImg">

                    </div> 
                </div>
            </div>
        </div>
    </div>`;
var productImageElement = document.getElementsByClassName('previewImg')[0]
for (let i = 0; i < productDetail.images.length; i++) {
  var smallImg = document.createElement('img');
  smallImg.id = 'img' + i;
  smallImg.src = productDetail.images[i];
  if (i == 0) {
    smallImg.classList.add('active');
  }
  smallImg.onclick = function () {
    addActiveClass(i);
  }
  productImageElement.appendChild(smallImg);
}
function addActiveClass(num){
  var previousActiveImage=document.getElementsByClassName('active')[0];
  previousActiveImage.classList.remove('active');
  var activeCard=document.getElementById('img'+num);
  activeCard.classList.add('active');
  var productImageElement=document.getElementById('productImg');
  productImageElement.src=productDetail.images[num]
}


