# Book-a-Table
Sample API for educational/tutorials purposes

## Version: 1.0.0

**Contact information:**  
nyala Team  
<https://nyala.dev>  
info@nyala.dev  

**License:** [MIT](https://mit-license.org)

[Find out more](https://github.com/nyaladev/book-a-table-api)
### /bookings

#### GET
##### Summary

##### Description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| _limit | query | Maximum number of results possible | No | integer |
| _sort | query | Sort according to a specific field. | No | string |
| _start | query | Skip a specific number of entries (especially useful for pagination) | No | integer |
| = | query | Get entries that matches exactly your input | No | string |
| _ne | query | Get records that are not equals to something | No | string |
| _lt | query | Get record that are lower than a value | No | string |
| _lte | query | Get records that are lower than or equal to a value | No | string |
| _gt | query | Get records that are greater than a value | No | string |
| _gte | query | Get records that are greater than  or equal a value | No | string |
| _contains | query | Get records that contains a value | No | string |
| _containss | query | Get records that contains (case sensitive) a value | No | string |
| _in | query | Get records that matches any value in the array of values | No | [ string ] |
| _nin | query | Get records that doesn't match any value in the array of values | No | [ string ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | response |
| 403 | Forbidden |
| 404 | Not found |
| default | unexpected error |

#### POST
##### Summary

##### Description

Create a new record

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | response |
| 403 | Forbidden |
| 404 | Not found |
| default | unexpected error |

### /bookings/count

#### GET
##### Summary

##### Description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | response |
| 403 | Forbidden |
| 404 | Not found |
| default | unexpected error |

### /bookings/{id}

#### GET
##### Summary

##### Description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | response |
| 403 | Forbidden |
| 404 | Not found |
| default | unexpected error |

#### PUT
##### Summary

##### Description

Update a record

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | response |
| 403 | Forbidden |
| 404 | Not found |
| default | unexpected error |

#### DELETE
##### Summary

##### Description

Delete a record

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | deletes a single record based on the ID supplied |
| 403 | Forbidden |
| 404 | Not found |
| default | unexpected error |

### /restaurants

#### GET
##### Summary

##### Description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| _limit | query | Maximum number of results possible | No | integer |
| _sort | query | Sort according to a specific field. | No | string |
| _start | query | Skip a specific number of entries (especially useful for pagination) | No | integer |
| = | query | Get entries that matches exactly your input | No | string |
| _ne | query | Get records that are not equals to something | No | string |
| _lt | query | Get record that are lower than a value | No | string |
| _lte | query | Get records that are lower than or equal to a value | No | string |
| _gt | query | Get records that are greater than a value | No | string |
| _gte | query | Get records that are greater than  or equal a value | No | string |
| _contains | query | Get records that contains a value | No | string |
| _containss | query | Get records that contains (case sensitive) a value | No | string |
| _in | query | Get records that matches any value in the array of values | No | [ string ] |
| _nin | query | Get records that doesn't match any value in the array of values | No | [ string ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | response |
| 403 | Forbidden |
| 404 | Not found |
| default | unexpected error |

#### POST
##### Summary

##### Description

Create a new record

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | response |
| 403 | Forbidden |
| 404 | Not found |
| default | unexpected error |

### /restaurants/count

#### GET
##### Summary

##### Description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | response |
| 403 | Forbidden |
| 404 | Not found |
| default | unexpected error |

### /restaurants/{id}

#### GET
##### Summary

##### Description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | response |
| 403 | Forbidden |
| 404 | Not found |
| default | unexpected error |

#### PUT
##### Summary

##### Description

Update a record

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | response |
| 403 | Forbidden |
| 404 | Not found |
| default | unexpected error |

#### DELETE
##### Summary

##### Description

Delete a record

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | deletes a single record based on the ID supplied |
| 403 | Forbidden |
| 404 | Not found |
| default | unexpected error |

### /tables

#### GET
##### Summary

##### Description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| _limit | query | Maximum number of results possible | No | integer |
| _sort | query | Sort according to a specific field. | No | string |
| _start | query | Skip a specific number of entries (especially useful for pagination) | No | integer |
| = | query | Get entries that matches exactly your input | No | string |
| _ne | query | Get records that are not equals to something | No | string |
| _lt | query | Get record that are lower than a value | No | string |
| _lte | query | Get records that are lower than or equal to a value | No | string |
| _gt | query | Get records that are greater than a value | No | string |
| _gte | query | Get records that are greater than  or equal a value | No | string |
| _contains | query | Get records that contains a value | No | string |
| _containss | query | Get records that contains (case sensitive) a value | No | string |
| _in | query | Get records that matches any value in the array of values | No | [ string ] |
| _nin | query | Get records that doesn't match any value in the array of values | No | [ string ] |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | response |
| 403 | Forbidden |
| 404 | Not found |
| default | unexpected error |

#### POST
##### Summary

##### Description

Create a new record

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | response |
| 403 | Forbidden |
| 404 | Not found |
| default | unexpected error |

### /tables/count

#### GET
##### Summary

##### Description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | response |
| 403 | Forbidden |
| 404 | Not found |
| default | unexpected error |

### /tables/{id}

#### GET
##### Summary

##### Description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | response |
| 403 | Forbidden |
| 404 | Not found |
| default | unexpected error |

#### PUT
##### Summary

##### Description

Update a record

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | response |
| 403 | Forbidden |
| 404 | Not found |
| default | unexpected error |

#### DELETE
##### Summary

##### Description

Delete a record

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | deletes a single record based on the ID supplied |
| 403 | Forbidden |
| 404 | Not found |
| default | unexpected error |

### Models

#### Booking

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | Yes |
| bookingDate | dateTime |  | No |
| bookingStatus | string | _Enum:_ `"confirmed"`, `"pending"`, `"canceled"` | No |
| people | integer |  | Yes |
| restaurant |  |  | No |
| table |  |  | No |
| customer |  |  | No |
| published_at | dateTime |  | No |

#### NewBooking

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| bookingDate | dateTime |  | No |
| bookingStatus | string | _Enum:_ `"confirmed"`, `"pending"`, `"canceled"` | No |
| people | integer |  | Yes |
| restaurant | string |  | No |
| table | string |  | No |
| customer | string |  | No |
| published_at | dateTime |  | No |
| created_by | string |  | No |
| updated_by | string |  | No |

#### Restaurant

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | Yes |
| name | string |  | Yes |
| description | string |  | No |
| address | string |  | No |
| image |  |  | No |
| owner |  |  | No |
| tables | [  ] |  | No |
| published_at | dateTime |  | No |

#### NewRestaurant

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string |  | Yes |
| description | string |  | No |
| address | string |  | No |
| owner | string |  | No |
| tables | [ string ] |  | No |
| published_at | dateTime |  | No |
| created_by | string |  | No |
| updated_by | string |  | No |

#### Table

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | Yes |
| identifier | string |  | Yes |
| capacity | integer |  | Yes |
| description | string |  | No |
| restaurant |  |  | No |
| available | boolean |  | No |
| published_at | dateTime |  | No |

#### NewTable

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| identifier | string |  | Yes |
| capacity | integer |  | Yes |
| description | string |  | No |
| restaurant | string |  | No |
| available | boolean |  | No |
| published_at | dateTime |  | No |
| created_by | string |  | No |
| updated_by | string |  | No |

#### Error

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | integer |  | Yes |
| message | string |  | Yes |
