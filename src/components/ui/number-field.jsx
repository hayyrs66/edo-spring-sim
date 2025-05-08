"use client"

import * as React from "react"
import { Input } from "./input"
import { Label } from "./label"
import { FormItem, FormDescription } from "./form"

const NumberField = React.forwardRef(({
  id,
  label,
  value,
  onChange,
  min,
  max,
  step = 0.01,
  description,
  className,
  ...props
}, ref) => {
  return (
    <FormItem className={className}>
      <div className="flex flex-col gap-2">
        <Label htmlFor={id}>{label}</Label>
        <Input
          ref={ref}
          id={id}
          type="number"
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          {...props}
        />
        {description && (
          <FormDescription>{description}</FormDescription>
        )}
      </div>
    </FormItem>
  )
})
NumberField.displayName = "NumberField"

export { NumberField }