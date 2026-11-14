import { Form, InputGroup } from 'react-bootstrap';

// Campo de formulário com ícone, usado em Login e Cadastro.
// O "id" também é usado como "name", então o form pode usar form[name].
export default function CampoComIcone({
  id,
  label,
  icone: Icone,
  obrigatorio = false,
  opcional = false,
  ...props
}) {
  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label className="fw-semibold small">
        {label}
        {obrigatorio && <span className="text-danger"> *</span>}
        {opcional && <small className="fw-normal text-body-secondary"> (opcional)</small>}
      </Form.Label>
      <InputGroup>
        <InputGroup.Text>
          <Icone size={18} aria-hidden="true" />
        </InputGroup.Text>
        <Form.Control name={id} {...props} />
      </InputGroup>
    </Form.Group>
  );
}
