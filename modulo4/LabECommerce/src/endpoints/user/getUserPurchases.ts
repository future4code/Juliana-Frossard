import connection from "../../connection";
import { Request, Response } from "express";

export const getUserPurchases = async (
    req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params

        const userPurchases = await connection.raw(`
        SELECT labecommerce_users.name, 
        labecommerce_products.name, 
        quantity,total_price  
        FROM labecommerce_purchases
        JOIN labecommerce_users ON user_id = labecommerce_users.id
        JOIN labecommerce_products ON product_id = labecommerce_products.id
        WHERE user_id LIKE ${id}`)
            
        res.status(200).send(userPurchases)

    } catch (error) {
        res.status(500).end
    }
}

export default getUserPurchases;