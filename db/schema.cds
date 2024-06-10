namespace sap.ui.lstnfa;

using {managed, sap.common.CodeList} from '@sap/cds/common';

entity Nfas : managed {
    key ID     : UUID @(Core.Computed: true);
        number : String;
        group  : String;
        code   : String(6);
        status :  Association to Status default 'N';
}

entity Status : CodeList {
key code: String enum {
    new = 'N';
    assigned = 'A'; 
    in_process = 'I'; 
    on_hold = 'H'; 
    resolved = 'R'; 
    closed = 'C'; 
};
criticality : Integer;
}
