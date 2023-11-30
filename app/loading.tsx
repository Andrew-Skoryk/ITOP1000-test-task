import { Spinner } from "@nextui-org/spinner";

function Loading() {
  return (
    <Spinner
      color="secondary"
      classNames={{
        base: "h-52",
        wrapper: "mb-4",
      }}
      label="Завантаження..."
      size="lg"
    />
  );
}

export default Loading;
