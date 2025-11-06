"use client";

import { useState } from "react";
import { useWidget } from "@/lib/widget/widgetState";
import { guestSchema } from "@/lib/widget/validation";
import Input from "@/components/widget/shared/Input";
import Button from "@/components/widget/shared/Button";

export default function GuestForm() {
  const { state, dispatch } = useWidget();
  const [values, setValues] = useState({
    fullName: state.guest?.fullName ?? "",
    email: state.guest?.email ?? "",
    phone: state.guest?.phone ?? ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function submit() {
    const parsed = guestSchema.safeParse(values);
    if (!parsed.success) {
      const es: Record<string, string> = {};
      parsed.error.issues.forEach(i => (es[i.path.join(".")] = i.message));
      setErrors(es);
      return;
    }
    dispatch({ type: "UPDATE_GUEST", guest: parsed.data });
    dispatch({ type: "SET_STEP", step: "payment" });
  }

  return (
    <div className="mx-auto max-w-xl space-y-4">
      <Input
        label="Full name"
        value={values.fullName}
        error={errors.fullName}
        onChange={(e) => setValues(v => ({ ...v, fullName: e.target.value }))}
      />
      <Input
        label="Email"
        type="email"
        value={values.email}
        error={errors.email}
        onChange={(e) => setValues(v => ({ ...v, email: e.target.value }))}
      />
      <Input
        label="Phone"
        value={values.phone}
        error={errors.phone}
        onChange={(e) => setValues(v => ({ ...v, phone: e.target.value }))}
      />
      <div className="flex items-center justify-between pt-2">
        <Button variant="ghost" onClick={() => dispatch({ type: "SET_STEP", step: "cart" })}>Back</Button>
        <Button onClick={submit}>Continue to payment</Button>
      </div>
    </div>
  );
}
