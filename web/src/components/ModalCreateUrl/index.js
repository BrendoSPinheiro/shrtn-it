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
}) => {
  const [translateIcon, setTranslateIcon] = useState(false);
  const [showDate, setShowDate] = useState('');

  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  const [focusedInput, setFocusedInput] = useState(null);

  const [/*hour,*/ setHour] = useState(1);

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
      width: '100px',

      display: 'flex',
      border: `0.1rem solid ${theme.colors.stroke.primary}`,
      padding: 4,
    }),
    singleValue: () => ({
      color: theme.colors.text.secondary,
    }),
  };

  return (
    <>
      <S.Wrapper hideModal={hideModal}>
        <S.Modal>
          <S.Header>
            <S.Title>Criar uma URL</S.Title>
            <S.Button onClick={onClick}>
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
                  setState(
                    { ...state, [nameState]: event.target.value },
                    console.log(state)
                  )
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

              <label htmlFor="select-option">Agendar por: </label>
              <S.WrapperMoreOptions>
                <div>
                  <S.InputRadio>
                    <input
                      type="radio"
                      name="more-option"
                      id="date"
                      value="date"
                      onChange={() => setShowDate('date')}
                    />
                    <label htmlFor="date">Data</label>
                  </S.InputRadio>

                  <S.InputRadio>
                    <input
                      type="radio"
                      name="more-option"
                      id="hour"
                      value="hour"
                      onChange={() => setShowDate('hour')}
                    />
                    <label htmlFor="hour">Hora</label>
                  </S.InputRadio>
                </div>
                {showDate === 'date' && (
                  <S.WrapperDate>
                    <DateRangePicker
                      startDatePlaceholderText="Inicia em"
                      endDatePlaceholderText="Termina em"
                      startDate={date.startDate}
                      startDateId="startDateUniqId"
                      endDate={date.endDate}
                      endDateId="endDateUniqId"
                      onDatesChange={({ startDate, endDate }) =>
                        setDate({ startDate, endDate })
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
                {showDate === 'hour' && (
                  <S.WrapperHour>
                    <span>Expira em: </span>

                    <Select
                      name="hours"
                      options={optionsHour}
                      className="basic-select"
                      classNamePrefix="select"
                      styles={customStyles}
                      defaultValue={optionsHour[0]}
                      onChange={(event) => setHour(event.value)}
                    />
                  </S.WrapperHour>
                )}
              </S.WrapperMoreOptions>
            </S.MoreOptions>

            <Button size="medium" fullWidth>
              Confirmar
            </Button>
          </S.Form>
        </S.Modal>
      </S.Wrapper>
    </>
  );
};

export default ModalCreateUrl;
