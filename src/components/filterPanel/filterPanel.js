import React from 'react';
import Slider from '@mui/material/Slider';
import { Checkbox } from '@mui/material';
import './filterPanel.scss';

export function FilterPanel(props) {
  return (
    <fieldset>
      <div className='button-group'>
        <select
          className='sort-type'
          defaultValue={'DEFAULT'}
          onChange={props.onSortChange}
        >
          <option value='DEFAULT' disabled>
            Choose sort type
          </option>
          <option value='titleASC'>A-Z</option>
          <option value='titleDESC'>Z-A</option>
          <option value='ratingASC'>Highest Rating</option>
          <option value='ratingDESC'>Lowest Rating</option>
          <option value='newest'>Newest release year</option>
          <option value='oldest'>Oldest release year</option>
        </select>
        <div className='favorite-movies-filter'>
          <Checkbox onChange={props.setOnlyFavoriteMovies} />
          <span>Only favorite movies</span>
        </div>
        <button onClick={props.handleDelete} className='delete-movies'>
          Delete chosen movies
        </button>
      </div>
      <div className='year filter'>
        <input
          value={props.yearRange[0]}
          type='number'
          min={1000}
          max={new Date().getFullYear() - 1}
          onChange={(event) =>
            props.handleYearChange(event.target.value, 'min')
          }
          name='minYear'
        ></input>
        <Slider
          value={props.yearRange}
          onChange={(event) =>
            props.handleYearChange(event.target.value, 'slider')
          }
          valueLabelDisplay='auto'
          min={1000}
          max={new Date().getFullYear()}
        />
        <input
          value={props.yearRange[1]}
          type='number'
          min={1001}
          max={new Date().getFullYear()}
          onChange={(event) =>
            props.handleYearChange(event.target.value, 'max')
          }
          name='maxYear'
        ></input>
      </div>
      <div className='rating filter'>
        <input
          value={props.ratingRange[0]}
          type='number'
          min={1}
          max={5}
          name='minRating'
          onChange={(event) =>
            props.handleRatingFilterChange(event.target.value, 'min')
          }
        ></input>
        <Slider
          value={props.ratingRange}
          onChange={(event) =>
            props.handleRatingFilterChange(event.target.value, 'slider')
          }
          valueLabelDisplay='auto'
          min={1}
          max={5}
        />
        <input
          value={props.ratingRange[1]}
          type='number'
          min={1}
          max={5}
          name='maxRating'
          onChange={(event) =>
            props.handleRatingFilterChange(event.target.value, 'max')
          }
        ></input>
      </div>
    </fieldset>
  );
}
