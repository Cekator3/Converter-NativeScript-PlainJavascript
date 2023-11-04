import {Observable} from "@nativescript/core";
import {Frame} from "@nativescript/core";
import {getUnitOfMeasureName} from "~/Model/UnitsOfMeasure/UnitsOfMeasureNames";
import {
    ListPickerGetAllElements,
    ListPickerSetFirstSelectedElement, ListPickerSetSecondSelectedElement
} from "~/Model/UnitsOfMeasure/UnitOfMeasureConvertation/ListPicker";

const viewModel = new Observable();

function chooseUnitOfMeasure(args)
{
    let selectedUnitOfMeasureId = args.object.items[args.index].unitOfMeasureIdentifier;
    if (viewModel.get('isChangingCurrentUnitOfMeasure'))
        ListPickerSetFirstSelectedElement(selectedUnitOfMeasureId);
    else
        ListPickerSetSecondSelectedElement(selectedUnitOfMeasureId);
    Frame.goBack();
}

function getUnitsOfMeasure()
{
    let result = [];
    let unitOfMeasureIdentifiers = ListPickerGetAllElements();
    for (let id of unitOfMeasureIdentifiers)
    {
        let name = getUnitOfMeasureName(id);
        result.push({
            unitOfMeasureIdentifier: id,
            unitOfMeasureName: name
        });
    }
    return result;
}

export function createViewModel(context)
{
    viewModel.isChangingCurrentUnitOfMeasure = context.isChangingCurrentUnitOfMeasure;
    viewModel.goBack = Frame.goBack;
    viewModel.chooseUnitOfMeasure = chooseUnitOfMeasure;
    viewModel.unitsOfMeasure = getUnitsOfMeasure();
    return viewModel;
}
