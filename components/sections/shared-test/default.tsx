import { Button } from '../../ui/shared-button';

export default function SharedTest() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Shared Components Test
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary" size="lg">
            Primary Button
          </Button>
          <Button variant="secondary" size="md">
            Secondary Button
          </Button>
          <Button variant="outline" size="sm">
            Outline Button
          </Button>
        </div>
      </div>
    </section>
  );
} 