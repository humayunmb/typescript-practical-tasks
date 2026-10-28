// 1. Define StockStatus literal type
type StockStatus = "Out of Stock" | "Low Stock" | "Available";

// 2. Create the Product interface
interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}

// 3. Create an inventory containing at least five products
const inventory: Product[] = [
    { id: 1, name: "Laptop", price: 1200, stock: 10 },
    { id: 2, name: "Mouse", price: 25, stock: 3 },
    { id: 3, name: "Keyboard", price: 45, stock: 0 },
    { id: 4, name: "Monitor", price: 300, stock: 2 },
    { id: 5, name: "Headphones", price: 80, stock: 6 }
];

// 4. Implement getStockStatus() based on stock counts
function getStockStatus(stock: number): StockStatus {
    if (stock === 0) {
        return "Out of Stock";
    } else if (stock >= 1 && stock <= 5) {
        return "Low Stock";
    } else {
        return "Available";
    }
}

// 5. Implement getLowStockProducts() to return products with low stock (1-5)
function getLowStockProducts(products: Product[]): string[] {
    return products
        .filter(p => p.stock >= 1 && p.stock <= 5)
        .map(p => p.name);
}

// 6. Create a dictionary mapping product names to stock counts using an Index Signature
interface StockDictionary {
    [productName: string]: number;
}

const stockCountMap: StockDictionary = {};
inventory.forEach(p => {
    stockCountMap[p.name] = p.stock;
});

// --- Display Output / Testing ---
console.log("Product Status Summary:");
inventory.forEach(p => {
    const status = getStockStatus(p.stock);
    console.log(`${p.name} - ${status}`);
});

const lowStockNames = getLowStockProducts(inventory);
console.log(`Low Stock Products: ${lowStockNames.join(', ')}`);