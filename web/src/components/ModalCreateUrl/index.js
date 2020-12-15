import { useState } from 'react';
import Select from 'react-select';
import { DateRangePicker } from 'react-dates';

import {
  FiX as XIcon,
  FiChevronRight as ChevronRightIcon,
} from 'react-icons/fi';

import * as S from './styles';

import InputForm from '../InputForm';
import Button from '../Button';

import { content, optionsHour } from './content';
import useTheme from '../../utils/useTheme';

const ModalCreateUrl = ({
  hideModal = true,
  onClick,
  state,
  setState,
  handleFormModal,
  stateButton,
  stateDate,
  stateHour,
  scheduling_typeState,
}) => {
  const [translateIcon, setTranslateIcon] = useState(false);

  const [focusedInput, setFocusedInput] = useState(null);

  // const [hour, setHour] = useState(1);
  const { theme } = useTheme();

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: `0.1rem solid ${theme.colors.stroke.primary}`,
      color: state.isSelected
        ? theme.colors.text.primary
        : theme.colors.text.secondary,
      background: theme.colors.background.secondBg,
      padding: 20,
      cursor: 'pointer',
    }),
    control: () => ({
      borderRadius: theme.border.buttonRadius,
      width: '10.6rem',

      display: 'flex',
      border: `0.1rem solid ${theme.colors.stroke.primary}`,
      padding: 4,
    }),
    singleValue: () => ({
      color: theme.colors.text.secondary,
    }),
  };

  const hideOnModal = () => {
    onClick();

    //Reset States
    scheduling_typeState.setScheduling_type('');
    setTranslateIcon(false);
    stateDate.setDate({
      startDate: null,
      endDate: null,
    });
    stateHour.setHour(1);
  };

  return (
    <>
      <S.Wrapper hideModal={hideModal}>
        <S.Modal>
          <S.Header>
            <S.Title>Criar uma URL</S.Title>
            <S.Button onClick={hideOnModal}>
              <XIcon size={24} />
            </S.Button>
          </S.Header>

          <S.Form onSubmit={handleFormModal}>
            {content.map(({ id, type, children, icon, nameState }) => (
              <InputForm
                key={id}
                type={type}
                icon={icon}
                value={state[nameState]}
                onChange={(event) =>
                  setState({ ...state, [nameState]: event.target.value })
                }
              >
                {children}
              </InputForm>
            ))}

            <S.MoreOptions translate={translateIcon}>
              <summary onClick={() => setTranslateIcon(!translateIcon)}>
                <ChevronRightIcon size={24} />
                <span>Mais opções</span>
              </summary>

              <S.Options isShowOptions={!!translateIcon}>
                <label htmlFor="select-option">Agendar por: </label>
                <S.WrapperMoreOptions>
                  <div>
                    <S.InputRadio>
                      <input
                        type="radio"
                        name="more-option"
                        id="date"
                        value="date"
                        checked={
                          scheduling_typeState.scheduling_type === 'date'
                        }
                        onChange={() =>
                          scheduling_typeState.setScheduling_type('date')
                        }
                      />
                      <label htmlFor="date">Data</label>
                    </S.InputRadio>

                    <S.InputRadio>
                      <input
                        type="radio"
                        name="more-option"
                        id="hour"
                        value="hour"
                        checked={
                          scheduling_typeState.scheduling_type === 'hour'
                        }
                        onChange={() =>
                          scheduling_typeState.setScheduling_type('hour')
                        }
                      />
                      <label htmlFor="hour">Hora</label>
                    </S.InputRadio>
                  </div>
                  {scheduling_typeState.scheduling_type === 'date' && (
                    <S.WrapperDate>
                      <DateRangePicker
                        startDatePlaceholderText="Inicia em"
                        endDatePlaceholderText="Termina em"
                        startDate={stateDate.date.startDate}
                        startDateId="startDateUniqId"
                        endDate={stateDate.date.endDate}
                        endDateId="endDateUniqId"
                        onDatesChange={({ startDate, endDate }) =>
                          stateDate.setDate({ startDate, endDate })
                        }
                        enableOutsideDays={true}
                        small={true}
                        openDirection="up"
                        focusedInput={focusedInput}
                        onFocusChange={(focusedInput) =>
                          setFocusedInput(focusedInput)
                        }
                      />
                    </S.WrapperDate>
                  )}
                  {scheduling_typeState.scheduling_type === 'hour' && (
                    <S.WrapperHour>
                      <>
                        <span>Inicia em: </span>

                        <Select
                          name="hours"
                          options={(() => {
                            return optionsHour.filter((hour) => hour.id !== 0);
                          })()}
                          className="basic-select"
                          classNamePrefix="select"
                          styles={customStyles}
                          defaultValue={optionsHour[0]}
                          onChange={(event) =>
                            stateHour.setHour({
                              ...stateHour.hour,
                              start_hour: event.value,
                            })
                          }
                        />
                        <span>Expira em: </span>

                        <Select
                          name="hours"
                          options={(() => {
                            return optionsHour.filter(
                              (hour) => hour.id > stateHour.hour.start_hour
                            );
                          })()}
                          className="basic-select"
                          classNamePrefix="select"
                          styles={customStyles}
                          defaultValue={optionsHour[1]}
                          onChange={(event) =>
                            stateHour.setHour({
                              ...stateHour.hour,
                              end_hour: event.value,
                            })
                          }
                        />
                      </>
                    </S.WrapperHour>
                  )}
                </S.WrapperMoreOptions>
              </S.Options>
            </S.MoreOptions>

            <Button fullWidth loading={stateButton}>
              {stateButton ? <div className="loading"></div> : 'Criar'}
            </Button>
          </S.Form>
        </S.Modal>
      </S.Wrapper>
    </>
  );
};

export default ModalCreateUrl;
