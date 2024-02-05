class ProductManager {
    constructor() {
        this.products = [];
        this.counter = 1; // Inicializo el contador en 1
    }

    getNextId() {
        return this.counter++;
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
    const productId = this.getNextId();
    const newProduct = {
        id: productId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    };
        this.products.push(newProduct);
    
        return newProduct;
    }

    getProductById(productId) {
    
        const product = this.products.find(product => product.id === productId);
            if (!product) {
        throw new Error('Product not found');
    }
    
        return product;
    }

    updateProduct(productId, field, value) {
        const product = this.products.find(product => product.id === productId);
            if (!product) {
        throw new Error('Product not found');
    }

    if (field !== 'id') {
        product[field] = value;
}

    return product;
    }

    deleteProduct(productId) {
        const index = this.products.findIndex(product => product.id === productId);
        if (index === -1) {
        throw new Error('Product not found');
}

        this.products.splice(index, 1);
    }
}

    const productManager = new ProductManager();

  // Se llama a getProducts y se espera un arreglo vacío
    console.log(productManager.getProducts()); 

  // Se agrega un producto con addProduct
    const newProduct = productManager.addProduct(
        'producto prueba',
        'Este es un producto prueba',
        200,
        'Sin imagen',
        'abc123',
        25
);

  // Se llama a getProducts y se espera el producto recién agregado
    console.log(productManager.getProducts());

  // Se llama a getProductById con el id del producto recién agregado
    console.log(productManager.getProductById(newProduct.id)); 

  // Se actualiza el producto recién agregado con updateProduct
    productManager.updateProduct(newProduct.id, 'price', 250);

  // Se verifica que el producto se haya actualizado correctamente
    console.log(productManager.getProducts()); 

  // Se elimina el producto con deleteProduct
    productManager.deleteProduct(newProduct.id);

  // Se verifica que el producto se haya eliminado correctamente
    console.log(productManager.getProducts()); 
