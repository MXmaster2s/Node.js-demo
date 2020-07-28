exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {   //express renders the template using this .render method
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}