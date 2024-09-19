import { client } from '../lib/sanity'; // Import the Sanity client

// Save the transaction to Sanity
export const saveTransaction = async (transaction) => {
    try {
        const result = await client.create({
            _type: 'transaction',
            ...transaction,
        });
        return result;
    } catch (error) {
        console.error('Error saving transaction:', error);
        throw new Error('Error saving transaction');
    }
};

// Retrieve the transaction by token
export async function getTransactionByToken(token) {
    try {
        const query = `*[_type == "transaction" && token == $token][0]`;
        const params = { token };
        const result = await client.fetch(query, params);
        return result;
    } catch (error) {
        console.error('Error retrieving transaction by token:', error);
        throw new Error('Sanity error');
    }
}

// Retrieve the transaction by payment ID
export async function getTransactionByPaymentId(paymentId) {
    try {
        const query = `*[_type == "transaction" && m_payment_id == $paymentId][0]`;
        const params = { paymentId };
        // Set 'cache' to 'no-store' to disable caching and force fresh data fetch
        const result = await client.fetch(query, params, { cache: 'no-store' });
        return result;
    } catch (error) {
        console.error('Error retrieving transaction by payment ID:', error);
        throw new Error('Sanity error');
    }
}


export async function getSourceCodeFromStore(storeId) {
    try {
        const query = `*[_type == "store" && _id == $storeId][0]`;
        const params = { storeId };
        const result = await client.fetch(query, params);
        return result ? result.sourceCodeUrl : null;
    } catch (error) {
        console.error('Error retrieving source code from store:', error);
        throw new Error('Sanity error');
    }
}

export async function getStoreByItemName(itemName) {
    try {
        const query = `*[_type == "store" && title == $itemName][0]`; // Assuming 'title' is equivalent to item_name
        const params = { itemName };
        const result = await client.fetch(query, params, { cache: 'no-store' });
        return result;
    } catch (error) {
        console.error('Error retrieving store by item name:', error);
        throw new Error('Sanity error');
    }
}



// Update the payment status of a transaction
export const updateTransactionStatus = async (token, newStatus) => {
    try {
        // Fetch the transaction document by token
        const transaction = await client.fetch('*[_type == "transaction" && token == $token][0]', { token });

        if (!transaction) {
            throw new Error('Transaction not found');
        }

        // Update the payment status using the document's _id
        const result = await client
            .patch(transaction._id)  // Use the document's _id, not a GROQ query
            .set({ paymentStatus: newStatus })  // Update the status
            .commit();

        return result;
    } catch (error) {
        console.error('Error updating transaction status:', error);
        throw error;
    }
};

// Save source code URL after payment completion
export async function saveSourceCodeUrl(paymentId, sourceCodeUrl) {
    try {
        const query = `*[_type == "transaction" && m_payment_id == $paymentId][0]`;
        const params = { paymentId };
        const transaction = await client.fetch(query, params);

        if (!transaction) {
            throw new Error('Transaction not found');
        }

        return await client.patch(transaction._id)
            .set({ sourceCodeUrl })
            .commit();
    } catch (error) {
        console.error('Error saving source code URL:', error);
        throw new Error('Sanity error');
    }
}
