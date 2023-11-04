import {Observable} from "@nativescript/core";
import {Frame} from "@nativescript/core";
import {
    userInputStorageAddSymbol, userInputStorageClearInput, userInputStorageRemoveLastSymbol,
    userInputStorageGenerateNumberFromInput,
    userInputStorageGetRawInput
} from "~/Model/UserInputStorage";
import {
    ListPickerGetFirstSelectedElement,
    ListPickerGetSecondSelectedElement, ListPickerSetSecondSelectedElement
} from "~/Model/UnitsOfMeasure/UnitOfMeasureConvertation/ListPicker";
import {getUnitOfMeasureName} from "~/Model/UnitsOfMeasure/UnitsOfMeasureNames";
import {
    ConvertValueToAnotherUnitOfMeasure
} from "~/Model/UnitsOfMeasure/UnitOfMeasureConvertation/UnitOfMeasureConverter";

const viewModel = new Observable();
const CHOOSE_UNIT_OF_MEASURE_MODULE_PATH = '/View/UnitOfMeasureConvertation/ChooseUnitOfMeasure/ChooseUnitOfMeasure';

function updateUnitsOfMeasureValues()
{
    let currentUnitOfMeasureId = ListPickerGetFirstSelectedElement();
    let targetUnitOfMeasureId = ListPickerGetSecondSelectedElement();
    let currentValue = userInputStorageGenerateNumberFromInput();
    let targetValue = ConvertValueToAnotherUnitOfMeasure(currentValue, currentUnitOfMeasureId, targetUnitOfMeasureId);
    viewModel.set('currentUnitOfMeasureValue', userInputStorageGetRawInput().replace('.', ','));
    viewModel.set('targetUnitOfMeasureValue', targetValue);
}

function setUnitsOfMeasureConvertionTypes()
{
    let id = '';
    id = ListPickerGetFirstSelectedElement();
    viewModel.set('currentUnitOfMeasureTypeName', getUnitOfMeasureName(id));
    id = ListPickerGetSecondSelectedElement();
    viewModel.set('targetUnitOfMeasureTypeName', getUnitOfMeasureName(id));
}

function inputNumberPart(args)
{
    let number = args.object.text;
    userInputStorageAddSymbol(number);
    updateUnitsOfMeasureValues();
}

function clearInput()
{
    userInputStorageClearInput();
    updateUnitsOfMeasureValues();
}

function deleteLastNumberPart()
{
    userInputStorageRemoveLastSymbol();
    updateUnitsOfMeasureValues();
}

function chooseTargetUnitOfMeasure()
{
    Frame.topmost().navigate({
        moduleName: CHOOSE_UNIT_OF_MEASURE_MODULE_PATH,
        context: { isChangingCurrentUnitOfMeasure: false }
    });
}

function chooseCurrentUnitOfMeasure()
{
    Frame.topmost().navigate({
        moduleName: CHOOSE_UNIT_OF_MEASURE_MODULE_PATH,
        context: { isChangingCurrentUnitOfMeasure: true }
    });
}

export function createViewModel(context)
{
    viewModel.title = context.convertationTitle;
    viewModel.goBack = Frame.goBack;
    viewModel.inputNumberPart = inputNumberPart;
    viewModel.clearInput = clearInput;
    viewModel.deleteLastNumberPart = deleteLastNumberPart;
    viewModel.chooseCurrentUnitOfMeasure = chooseCurrentUnitOfMeasure;
    viewModel.chooseTargetUnitOfMeasure = chooseTargetUnitOfMeasure;
    updateUnitsOfMeasureValues();
    return viewModel;
}
