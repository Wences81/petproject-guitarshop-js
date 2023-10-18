class Shopping {

    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sunCatalog = 0;

        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <tr>
                    <td class='shopping-element__name'>⚡️ ${name}</td>
                    <td class='shopping-element__price'> ${price.toLocaleString()} EUR</td>
                </tr>
                `;
                sunCatalog += price;

            }

        });

        const html = `
        <div class='shopping-container'>
            <div class='shopping__close' onclick='shoppingPage.handleClear()'></div>
             <table>
                 ${htmlCatalog}
                 <tr>
                    <td class='shopping-element__name'>💥 FINAL PRICE :</td>
                    <td class='shopping-element__price'>${sunCatalog.toLocaleString()} EUR</td>
                 </tr>
             </table>
        </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();