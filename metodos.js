class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Se requiere todos los campos");
            return;
        }

        // Validar que "code" no se repita
        if (this.products.some((product) => product.code === code)) {
            console.error(`El producto con el codigo ${code} ya esta esta en uso`);
            return;
        }

        // Validar que el campo "price" sea un número positivo
        if (typeof price !== 'number' || price <= 0) {
            console.error("El precio debe ser un número positivo");
            return;
        }

        // Validar que el campo "stock" sea un número entero positivo
        if (!Number.isInteger(stock) || stock <= 0) {
            console.error("El stock debe ser un número entero positivo");
            return;
        }

        // Crear el nuevo producto con un ID autoincrementasble
        const newProduct = {
            id: this.nextId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.products.push(newProduct);
        this.nextId++;

        console.log("Producto agregado:", newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (product) {
            return product;
        } else {
            console.error("Producto no encontrado");
        }
    }
};

// Ejemplo de como usarlo
const manager = new ProductManager();

manager.addProduct("Tomate perita pelado inca", "Tomate cubeteado pelado", 250.10, "/src/perita_lata.png", "001", 200);
manager.addProduct("Garbanzos Secos ciudad del lago", "Garbanzos remojados", 2696.33, "/src/Garbanzo-Inalpa-x-350-gr.jpg", "002", 100);

console.log(manager.getProducts());
console.log(manager.getProductById(1));
console.log(manager.getProductById(3));
