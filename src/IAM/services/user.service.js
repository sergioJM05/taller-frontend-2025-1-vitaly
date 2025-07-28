import httpInstance from "../../shared/services/http.instance.js";


/**
 * @summary UsersApiService is a service class for managing user-related operations
 * @description This class provides methods to interact with the user API endpoint, allowing for CRUD operations on user resources.
 * @author u202318274 Julca Minaya Sergio Gino
 */
export class UserService {
    /**
     * @summary The endpoint path for user resources
     * @description This property holds the API endpoint path for user-related operations, sourced from environment variables.
     * @type {string}
     * @author u202318274 Julca Minaya Sergio Gino
     */
    resourceEndPoint = import.meta.env.VITE_USERS_ENDPOINT_PATH;

    /**
     * @summary Fetches all user resources
     * @description This method retrieves all user resources from the API endpoint defined in resourceEndPoint.
     * @returns {Promise<axios.AxiosResponse<any>>}
     * @author u202318274 Julca Minaya Sergio Gino
     */
    getAll(){
        return httpInstance.get(this.resourceEndPoint);
    }

    /**
     * @summary Fetches a user resource by its ID
     * @description This method retrieves a specific user resource from the API endpoint using the provided ID.
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     * @author u202318274 Julca Minaya Sergio Gino
     */
    getById(id){
        return httpInstance.get(`${this.resourceEndPoint}/${id}`);
    }

    /**
     * @summary Creates a new user resource
     * @description This method sends a POST request to the API endpoint to create a new user resource with the provided data.
     * @param resource
     * @returns {Promise<axios.AxiosResponse<any>>}
     * @author u202318274 Julca Minaya Sergio Gino
     */
    create(resource){
        return httpInstance.post(this.resourceEndPoint, resource);
    }

    /**
     * @summary Updates an existing user resource
     * @description This method sends a PUT request to the API endpoint to update an existing user resource identified by its ID.
     * @param id
     * @param resource
     * @returns {Promise<axios.AxiosResponse<any>>}
     * @author u202318274 Julca Minaya Sergio Gino
     */
    update(id, resource){
        return httpInstance.put(`${this.resourceEndPoint}/${id}`, resource);
    }

    /**
     * @summary Deletes a user resource by its ID
     * @description This method sends a DELETE request to the API endpoint to remove a user resource identified by its ID.
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     * @author u202318274 Julca Minaya Sergio Gino
     */
    delete(id){
        return httpInstance.delete(`${this.resourceEndPoint}/${id}`);
    }

    /**
     * @summary Fetches a user resource by its email
     * @description This method retrieves a specific user resource from the API endpoint using the provided email.
     * @param email
     * @returns {Promise<axios.AxiosResponse<any>>}
     * @author u202318274 Julca Minaya Sergio Gino
     */
    //homework
}