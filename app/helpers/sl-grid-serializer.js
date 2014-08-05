export default function( modelName, modelNames ){
    return function defaultArraySerializer( response, store ){

        store.metaForType( modelName, {
            modelName: modelName,
            modelNames: modelNames,
            pageCount: response.result.length,
            totalCount: response.totalCount,
            totalPages: response.totalPages
        });

        return response.result;
    };
}