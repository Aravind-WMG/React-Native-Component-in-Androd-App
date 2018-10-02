package com.android.poc;

public class Product {
    public String getImageUrl() {
        return imageUrl;
    }

    public Product() {
    }

    public String getSale_price() {
        return sale_price;
    }

    public void setSale_price(String sale_price) {
        this.sale_price = sale_price;
    }

    public String getPdt_name() {
        return pdt_name;
    }

    public void setPdt_name(String pdt_name) {
        this.pdt_name = pdt_name;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    private String imageUrl;
    private String sale_price;
    private String pdt_name;

    public String getReg_price() {
        return reg_price;
    }

    public void setReg_price(String reg_price) {
        this.reg_price = reg_price;
    }

    private String reg_price;

}
