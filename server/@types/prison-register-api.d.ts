/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/secure/prisons/id/{prisonId}/videolink-conferencing-centre/email-address': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get a prison's Videolink Conferencing Centre email address
     * @deprecated
     */
    get: operations['getEmailForVideoConferencingCentre']
    /**
     * Set or change a prison's Videolink Conferencing Centre email address
     * @deprecated
     */
    put: operations['putEmailAddressForVideolinkConferencingCentre']
    post?: never
    /**
     * Remove a prison's Videolink Conferencing Centre email address
     * @deprecated
     */
    delete: operations['deleteEmailAddressForVideolinkConferencingCentre']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/secure/prisons/id/{prisonId}/offender-management-unit/email-address': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get a prison's Offender Management Unit email address
     * @deprecated
     */
    get: operations['getEmailForOffenderManagementUnit']
    /**
     * Set or change a prison's Offender Management Unit email address
     * @deprecated
     */
    put: operations['putEmailAddressForOffenderManagementUnit']
    post?: never
    /**
     * Remove a prison's Offender Management Unit email address
     * @deprecated
     */
    delete: operations['deleteEmailAddressForOffenderManagementUnit']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/secure/prisons/id/{prisonId}/department/contact-details': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get a prison department's contact details */
    get: operations['getContactDetails']
    /** Change a prison department's contact details */
    put: operations['updateContactDetails']
    /** Create a prison department's contact details */
    post: operations['createContactDetails']
    /** Remove a prison department's contact details */
    delete: operations['deletePhoneNumber']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/prison-maintenance/id/{prisonId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Update specified prison details
     * @description Updates prison information, role required is MAINTAIN_REF_DATA or MAINTAIN_PRISON_DATA
     */
    put: operations['updatePrison']
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/prison-maintenance/id/{prisonId}/address/{addressId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /**
     * Update specified address details
     * @description Updates address information, role required is MAINTAIN_REF_DATA or MAINTAIN_PRISON_DATA
     */
    put: operations['updateAddress']
    post?: never
    /**
     * Delete specified address for specified Prison
     * @description Deletes address information for a Prison, role required is MAINTAIN_REF_DATA or MAINTAIN_PRISON_DATA
     */
    delete: operations['deleteAddress']
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/prisons/prisonsByIds': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Get prisons by IDs
     * @description Get prisons based on their IDs
     */
    post: operations['getPrisonsByIds']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/prison-maintenance': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Adds a new prison
     * @description Adds new prison information, role required is MAINTAIN_REF_DATA or MAINTAIN_PRISON_DATA
     */
    post: operations['insertPrison']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/prison-maintenance/id/{prisonId}/address': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /**
     * Add Address to existing Prison
     * @description Adds an additional Address to an existing Prison, role required is MAINTAIN_REF_DATA or MAINTAIN_PRISON_DATA
     */
    post: operations['addAddress']
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/prisons': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get all prisons
     * @description All prisons
     */
    get: operations['getPrisons']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/prisons/search': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get prisons from active and text search
     * @description All prisons
     */
    get: operations['getPrisonsBySearchFilter']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/prisons/names': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get prison names
     * @description prison id and full name
     */
    get: operations['getPrisonNames']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/prisons/id/{prisonId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get specified prison
     * @description Information on a specific prison
     */
    get: operations['getPrisonFromId']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/prisons/id/{prisonId}/address/{addressId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /**
     * Get specified prison
     * @description Information on a specific prison address
     */
    get: operations['getAddressFromId']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gp/prison/{prisonId}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get GP practice code about specified prison */
    get: operations['getPrisonFromId_1']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/gp/practice/{gpPracticeCode}': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** Get specified prison from GP practice code */
    get: operations['getPrisonFromGpPrescriber']
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export type webhooks = Record<string, never>
export interface components {
  schemas: {
    /** @description Contact information for a prison department */
    ContactDetailsDto: {
      /**
       * @description Department Type
       * @example SOCIAL_VISIT or PRISON
       * @enum {string}
       */
      type: 'PRISON' | 'SOCIAL_VISIT' | 'VIDEOLINK_CONFERENCING_CENTRE' | 'OFFENDER_MANAGEMENT_UNIT'
      /**
       * @description email address
       * @example example@example.com
       */
      emailAddress?: string
      /**
       * @description Phone Number
       * @example 01234567890
       */
      phoneNumber?: string
      /**
       * @description Web address
       * @example https://www.example.co.uk
       */
      webAddress?: string
    }
    ErrorResponse: {
      /** Format: int32 */
      status: number
      /** Format: int32 */
      errorCode?: number
      userMessage?: string
      developerMessage?: string
      moreInfo?: string
    }
    /** @description Prison Update Record */
    UpdatePrisonDto: {
      /**
       * @description Name of the prison
       * @example HMP Moorland
       */
      prisonName: string
      /** @description Whether the prison is still active */
      active: boolean
      /** @description If this is a male prison */
      male: boolean
      /** @description If this is a female prison */
      female: boolean
      /** @description If this is a contracted prison */
      contracted: boolean
      /** @description Set of types for this prison */
      prisonTypes: ('HMP' | 'YOI' | 'IRC' | 'STC' | 'YCS')[]
      /** @description Set of categories for this prison */
      categories: ('A' | 'B' | 'C' | 'D')[]
    }
    /** @description List of address for this prison */
    AddressDto: {
      /**
       * Format: int64
       * @description Unique ID of the address
       * @example 10000
       */
      id: number
      /**
       * @description Address line 1
       * @example Bawtry Road
       */
      addressLine1?: string
      /**
       * @description Address line 2
       * @example Hatfield Woodhouse
       */
      addressLine2?: string
      /**
       * @description Village/Town/City
       * @example Doncaster
       */
      town: string
      /**
       * @description County
       * @example South Yorkshire
       */
      county?: string
      /**
       * @description Postcode
       * @example DN7 6BW
       */
      postcode: string
      /**
       * @description Country
       * @example England
       */
      country: string
    }
    /** @description Prison Information */
    PrisonDto: {
      /**
       * @description Prison ID
       * @example MDI
       */
      prisonId: string
      /**
       * @description Name of the prison
       * @example Moorland HMP
       */
      prisonName: string
      /** @description Whether the prison is still active */
      active: boolean
      /** @description Whether the prison has male prisoners */
      male: boolean
      /** @description Whether the prison has female prisoners */
      female: boolean
      /** @description Whether the prison is contracted */
      contracted: boolean
      /** @description List of types for this prison */
      types: components['schemas']['PrisonTypeDto'][]
      /** @description List of the categories for this prison */
      categories: ('A' | 'B' | 'C' | 'D')[]
      /** @description List of address for this prison */
      addresses: components['schemas']['AddressDto'][]
      /** @description List of operators for this prison */
      operators: components['schemas']['PrisonOperatorDto'][]
    }
    /** @description List of operators for this prison */
    PrisonOperatorDto: {
      /**
       * @description Prison operator name
       * @example PSP, G4S
       */
      name: string
    }
    /** @description List of types for this prison */
    PrisonTypeDto: {
      /**
       * @description Prison type code
       * @example HMP
       * @enum {string}
       */
      code: 'HMP' | 'YOI' | 'IRC' | 'STC' | 'YCS'
      /**
       * @description Prison type description
       * @example His Majesty’s Prison
       */
      description: string
    }
    /** @description Address Update Record */
    UpdateAddressDto: {
      /**
       * @description Address line 1
       * @example Bawtry Road
       */
      addressLine1?: string
      /**
       * @description Address line 2
       * @example Hatfield Woodhouse
       */
      addressLine2?: string
      /**
       * @description Village/Town/City
       * @example Doncaster
       */
      town: string
      /**
       * @description County
       * @example South Yorkshire
       */
      county?: string
      /**
       * @description Postcode
       * @example DN7 6BW
       */
      postcode: string
      /**
       * @description Country
       * @example England
       */
      country: string
    }
    PrisonRequest: {
      /** @description List of prison ids */
      prisonIds: string[]
    }
    /** @description Prison Insert Record */
    InsertPrisonDto: {
      /**
       * @description Prison Id
       * @example MDI
       */
      prisonId: string
      /**
       * @description Name of the prison
       * @example HMP Moorland
       */
      prisonName: string
      /** @description Whether the prison is still active */
      active: boolean
      /** @description If this is a male prison */
      male: boolean
      /** @description If this is a female prison */
      female: boolean
      /** @description If this is a contracted prison */
      contracted: boolean
      /**
       * @description Set of types for this prison
       * @example HMP
       */
      prisonTypes: ('HMP' | 'YOI' | 'IRC' | 'STC' | 'YCS')[]
      /** @description List of addresses for this prison */
      addresses: components['schemas']['UpdateAddressDto'][]
      /** @description Set of categories for this prison */
      categories: ('A' | 'B' | 'C' | 'D')[]
    }
    /** @description Full name of prison with id */
    PrisonNameDto: {
      /**
       * @description Prison ID
       * @example MDI
       */
      prisonId: string
      /**
       * @description Name of the prison
       * @example Moorland HMP
       */
      prisonName: string
    }
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
  getEmailForVideoConferencingCentre: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Prison ID
         * @example MDI
         */
        prisonId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Returns the email address */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'text/plain': unknown
        }
      }
      /** @description Client error - invalid prisonId or similar */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'text/plain': string
        }
      }
      /** @description The prison does not have a Videolink Conferencing Centre email address */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'text/plain': string
        }
      }
    }
  }
  putEmailAddressForVideolinkConferencingCentre: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Prison ID
         * @example MDI
         */
        prisonId: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'text/plain': string
      }
    }
    responses: {
      /** @description The email address was created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description The email address was updated */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Client error - invalid prisonId, email address or similar */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description No prison found for the supplied prison id */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  deleteEmailAddressForVideolinkConferencingCentre: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Prison ID
         * @example MDI
         */
        prisonId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description The email address was removed */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Client error - invalid prisonId or similar */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  getEmailForOffenderManagementUnit: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Prison ID
         * @example MDI
         */
        prisonId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Returns the email address */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'text/plain': unknown
        }
      }
      /** @description Client error - invalid prisonId or similar */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'text/plain': string
        }
      }
      /** @description The prison does not have a Offender Management Unit email address */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'text/plain': string
        }
      }
    }
  }
  putEmailAddressForOffenderManagementUnit: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Prison ID
         * @example MDI
         */
        prisonId: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'text/plain': string
      }
    }
    responses: {
      /** @description The email address was created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description The email address was updated */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Client error - invalid prisonId, email address, media type or similar */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description No prison found for the supplied prison id */
      404: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  deleteEmailAddressForOffenderManagementUnit: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Prison ID
         * @example MDI
         */
        prisonId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description The email address was removed */
      204: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Client error - invalid prisonId or similar */
      400: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
    }
  }
  getContactDetails: {
    parameters: {
      query: {
        /**
         * @description Department type
         * @example SOCIAL_VISIT
         */
        departmentType: string
      }
      header?: never
      path: {
        /**
         * @description Prison ID
         * @example MDI
         */
        prisonId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Returns the departments contact details */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ContactDetailsDto']
        }
      }
      /** @description Client error - invalid prisonId or similar */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description The prison does not have contact details for this department */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  updateContactDetails: {
    parameters: {
      query?: {
        /**
         * @description if true individual contact details are removed if null
         * @example true
         */
        removeIfNull?: string
      }
      header?: never
      path: {
        /**
         * @description Prison ID
         * @example MDI
         */
        prisonId: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ContactDetailsDto']
      }
    }
    responses: {
      /** @description The Contact details have been updated */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ContactDetailsDto']
        }
      }
      /** @description Client error - invalid prisonId, contact details, media type or similar */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description The given prison or contact details for this prison cannot be found. */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  createContactDetails: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Prison ID
         * @example MDI
         */
        prisonId: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['ContactDetailsDto']
      }
    }
    responses: {
      /** @description Contact details have been created */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ContactDetailsDto']
        }
      }
      /** @description Client error - invalid prisonId, contact details, media type or similar */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description The prison does not exist */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  deletePhoneNumber: {
    parameters: {
      query: {
        /**
         * @description Department type
         * @example SOCIAL_VISIT
         */
        departmentType: string
      }
      header?: never
      path: {
        /**
         * @description Prison ID
         * @example MDI
         */
        prisonId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description The contact details were removed */
      204: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json':
            | '100 CONTINUE'
            | '101 SWITCHING_PROTOCOLS'
            | '102 PROCESSING'
            | '103 EARLY_HINTS'
            | '103 CHECKPOINT'
            | '200 OK'
            | '201 CREATED'
            | '202 ACCEPTED'
            | '203 NON_AUTHORITATIVE_INFORMATION'
            | '204 NO_CONTENT'
            | '205 RESET_CONTENT'
            | '206 PARTIAL_CONTENT'
            | '207 MULTI_STATUS'
            | '208 ALREADY_REPORTED'
            | '226 IM_USED'
            | '300 MULTIPLE_CHOICES'
            | '301 MOVED_PERMANENTLY'
            | '302 FOUND'
            | '302 MOVED_TEMPORARILY'
            | '303 SEE_OTHER'
            | '304 NOT_MODIFIED'
            | '305 USE_PROXY'
            | '307 TEMPORARY_REDIRECT'
            | '308 PERMANENT_REDIRECT'
            | '400 BAD_REQUEST'
            | '401 UNAUTHORIZED'
            | '402 PAYMENT_REQUIRED'
            | '403 FORBIDDEN'
            | '404 NOT_FOUND'
            | '405 METHOD_NOT_ALLOWED'
            | '406 NOT_ACCEPTABLE'
            | '407 PROXY_AUTHENTICATION_REQUIRED'
            | '408 REQUEST_TIMEOUT'
            | '409 CONFLICT'
            | '410 GONE'
            | '411 LENGTH_REQUIRED'
            | '412 PRECONDITION_FAILED'
            | '413 PAYLOAD_TOO_LARGE'
            | '413 REQUEST_ENTITY_TOO_LARGE'
            | '414 URI_TOO_LONG'
            | '414 REQUEST_URI_TOO_LONG'
            | '415 UNSUPPORTED_MEDIA_TYPE'
            | '416 REQUESTED_RANGE_NOT_SATISFIABLE'
            | '417 EXPECTATION_FAILED'
            | '418 I_AM_A_TEAPOT'
            | '419 INSUFFICIENT_SPACE_ON_RESOURCE'
            | '420 METHOD_FAILURE'
            | '421 DESTINATION_LOCKED'
            | '422 UNPROCESSABLE_ENTITY'
            | '423 LOCKED'
            | '424 FAILED_DEPENDENCY'
            | '425 TOO_EARLY'
            | '426 UPGRADE_REQUIRED'
            | '428 PRECONDITION_REQUIRED'
            | '429 TOO_MANY_REQUESTS'
            | '431 REQUEST_HEADER_FIELDS_TOO_LARGE'
            | '451 UNAVAILABLE_FOR_LEGAL_REASONS'
            | '500 INTERNAL_SERVER_ERROR'
            | '501 NOT_IMPLEMENTED'
            | '502 BAD_GATEWAY'
            | '503 SERVICE_UNAVAILABLE'
            | '504 GATEWAY_TIMEOUT'
            | '505 HTTP_VERSION_NOT_SUPPORTED'
            | '506 VARIANT_ALSO_NEGOTIATES'
            | '507 INSUFFICIENT_STORAGE'
            | '508 LOOP_DETECTED'
            | '509 BANDWIDTH_LIMIT_EXCEEDED'
            | '510 NOT_EXTENDED'
            | '511 NETWORK_AUTHENTICATION_REQUIRED'
        }
      }
      /** @description Client error - invalid prisonId or similar */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description The contact details for this prison cannot be found. */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  updatePrison: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Prison Id
         * @example MDI
         */
        prisonId: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdatePrisonDto']
      }
    }
    responses: {
      /** @description Prison Information Updated */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PrisonDto']
        }
      }
      /** @description Information request to update prison */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Unauthorized to access this endpoint */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Incorrect permissions to make prison update */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Prison ID not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  updateAddress: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Prison Id
         * @example MDI
         */
        prisonId: string
        /**
         * @description Address Id
         * @example 234231
         */
        addressId: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateAddressDto']
      }
    }
    responses: {
      /** @description Address Information Updated */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AddressDto']
        }
      }
      /** @description Bad Information request to update address */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Unauthorized to access this endpoint */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Incorrect permissions to make address update */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Address Id not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  deleteAddress: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Prison Id
         * @example MDI
         */
        prisonId: string
        /**
         * @description Address Id
         * @example 234231
         */
        addressId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Address Information Deleted */
      200: {
        headers: {
          [name: string]: unknown
        }
        content?: never
      }
      /** @description Unauthorized to access this endpoint */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Incorrect permissions to make address update */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Address Id not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  getPrisonsByIds: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['PrisonRequest']
      }
    }
    responses: {
      /** @description Successful operation */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PrisonDto'][]
        }
      }
    }
  }
  insertPrison: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['InsertPrisonDto']
      }
    }
    responses: {
      /** @description Prison Information Inserted */
      201: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PrisonDto']
        }
      }
      /** @description Information request to add prison */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Unauthorized to access this endpoint */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Incorrect permissions to make prison insert */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  addAddress: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Prison Id
         * @example MDI
         */
        prisonId: string
      }
      cookie?: never
    }
    requestBody: {
      content: {
        'application/json': components['schemas']['UpdateAddressDto']
      }
    }
    responses: {
      /** @description New Address added to Prison */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AddressDto']
        }
      }
      /** @description Bad Information request to update address */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Unauthorized to access this endpoint */
      401: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Incorrect permissions to add Prison address */
      403: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Prison Id not found */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  getPrisons: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful Operation */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PrisonDto'][]
        }
      }
    }
  }
  getPrisonsBySearchFilter: {
    parameters: {
      query?: {
        /**
         * @description Active
         * @example true
         */
        active?: boolean
        /**
         * @description Text search
         * @example Sheffield
         */
        textSearch?: string
        /**
         * @description Genders to filter by
         * @example MALE, FEMALE
         */
        genders?: ('MALE' | 'FEMALE')[]
        /**
         * @description Prison type codes to filter by
         * @example HMP, YOI
         */
        prisonTypeCodes?: ('HMP' | 'YOI' | 'IRC' | 'STC' | 'YCS')[]
      }
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful Operation */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PrisonDto'][]
        }
      }
    }
  }
  getPrisonNames: {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful Operation */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PrisonNameDto'][]
        }
      }
    }
  }
  getPrisonFromId: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Prison ID
         * @example MDI
         */
        prisonId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful Operation */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['PrisonDto']
        }
      }
    }
  }
  getAddressFromId: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Prison ID
         * @example MDI
         */
        prisonId: string
        /**
         * @description Address Id
         * @example 234231
         */
        addressId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Successful Operation */
      200: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['AddressDto']
        }
      }
    }
  }
  getPrisonFromId_1: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description Prison ID
         * @example MDI
         */
        prisonId: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Bad request.  Wrong format for prison_id. */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description Prison not found. */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
  getPrisonFromGpPrescriber: {
    parameters: {
      query?: never
      header?: never
      path: {
        /**
         * @description GP Practice Code
         * @example Y05537
         */
        gpPracticeCode: string
      }
      cookie?: never
    }
    requestBody?: never
    responses: {
      /** @description Bad request.  Wrong format for GP practice code. */
      400: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
      /** @description No prison linked to the GP practice code. */
      404: {
        headers: {
          [name: string]: unknown
        }
        content: {
          'application/json': components['schemas']['ErrorResponse']
        }
      }
    }
  }
}
