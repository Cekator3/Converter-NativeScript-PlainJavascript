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
    let userRawInput = userInputStorageGetRawInput()
                            .replace('.', ',');
    let currentValue = userInputStorageGenerateNumberFromInput();
    let targetValue = ConvertValueToAnotherUnitOfMeasure(currentValue,
                                                                currentUnitOfMeasureId,
                                                                targetUnitOfMeasureId);
    viewModel.set('currentUnitOfMeasureValue', userRawInput);
    viewModel.set('targetUnitOfMeasureValue', targetValue);
}

function updateTypesOfUnitsOfMeasure()
{
    let id = ListPickerGetFirstSelectedElement();
    viewModel.set('currentUnitOfMeasureTypeName', getUnitOfMeasureName(id));
    id = ListPickerGetSecondSelectedElement();
    viewModel.set('targetUnitOfMeasureTypeName', getUnitOfMeasureName(id));
}

function addSymbolToUserInput(args)
{
    let number = args.object.text;
    userInputStorageAddSymbol(number);
    updateUnitsOfMeasureValues();
}

function clearUserInput()
{
    userInputStorageClearInput();
    updateUnitsOfMeasureValues();
}

function deleteLastInputOfUser()
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
    viewModel.inputNumberPart = addSymbolToUserInput;
    viewModel.clearInput = clearUserInput;
    viewModel.deleteLastNumberPart = deleteLastInputOfUser;
    viewModel.chooseCurrentUnitOfMeasure = chooseCurrentUnitOfMeasure;
    viewModel.chooseTargetUnitOfMeasure = chooseTargetUnitOfMeasure;
    updateUnitsOfMeasureValues();
    updateTypesOfUnitsOfMeasure();
    return viewModel;
}
