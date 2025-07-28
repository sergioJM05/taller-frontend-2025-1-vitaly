import {User} from "../model/user.entity.js";

export class UserAssembler{

    /**
     * Converts a user resource to a User entity.
     * This method is used to transform the raw data from the API into a User entity.
     * @author Julca Minaya Sergio Gino, u202318274
     * @param resource
     * @returns {User} Object of type User
     */
    static toEntityFromResource(resource) {
        return new User(resource);
    }

    /**
     * Converts a response containing user resources to an array of User entities.
     * This method is used to transform the raw data from the API into an array of User entities.
     * @param response
     * @returns {User[]} Array of User entities
     */
    static toEntitiesFromResponse(response) {
        if (!response || !response.data || !Array.isArray(response.data)) {
            console.error('Invalid resource: ', response);
            return [];
        }
        return response.data.map(userResource => this.toEntityFromResource(userResource));
    }
}