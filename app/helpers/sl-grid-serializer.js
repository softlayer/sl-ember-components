export default function( modelName ){
    return function defaultArraySerializer( response, store ){

        store.metaForType( modelName, {
            modelName: modelName,
            modelNames: store.pluralize( modelName ),
            pageCount: response.result.length,
            totalCount: response.totalCount,
            totalPages: response.totalPages
        });

        return response.result;
    };
}
