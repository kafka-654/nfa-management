using NfaService as service from '../../srv/nfa-service';
annotate service.Nfas with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'number',
                Value : number,
            },
            {
                $Type : 'UI.DataField',
                Label : 'group',
                Value : group,
            },
            {
                $Type : 'UI.DataField',
                Label : 'code',
                Value : code,
            },
            {
                $Type : 'UI.DataField',
                Label : 'status_code',
                Value : status_code,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Nfa Number',
            Value : number,
        },
        {
            $Type : 'UI.DataField',
            Label : 'BU/Purchasing Group',
            Value : group,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Plant Code',
            Value : code,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Status',
            Value : status_code,
            Criticality : status.criticality,
        },
    ],
);

annotate service.Nfas with {
    status @Common.Text : status.descr
};
