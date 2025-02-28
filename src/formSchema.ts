import { VaultGroupList } from './store/index';

export function getBuilderSchema() {
    return {
        dataSchema: {
            type: 'object',
            properties: {
                // urlParamsEnabled: {
                //     title: '$enable_url_params',
                //     type: 'boolean'
                // },
                assetNames: {
                    title: '$asset_names',
                    type: 'array',
                    required: true,
                    items: {
                        type: 'string',
                        maxItems: VaultGroupList.length,
                        title: '$asset_name',
                        enum: VaultGroupList.map(v => v.assetName),
                        required: true
                    }
                }
            }
        },
        uiSchema: {
            type: 'VerticalLayout',
            elements: [
                // {
                //     type: 'Control',
                //     scope: '#/properties/urlParamsEnabled'
                // },
                {
                    type: 'Control',
                    scope: '#/properties/assetNames',
                    detail: {
                        type: 'VerticalLayout'
                    }
                }
            ]
        }
    }
}